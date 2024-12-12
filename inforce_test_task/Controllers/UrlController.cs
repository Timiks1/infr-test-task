using inforce_test_task.Database.Model;
using inforce_test_task.Database;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace inforce_test_task.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class UrlController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UrlController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllUrls()
        {
            return Ok(_context.ShortUrls.ToList());
        }

        [HttpPost]
        [Authorize]
        public IActionResult CreateShortUrl([FromBody] CreateUrlRequest request)
        {
            if (_context.ShortUrls.Any(u => u.OriginalUrl == request.OriginalUrl))
            {
                return BadRequest("This URL is already shortened.");
            }

            var shortCode = Guid.NewGuid().ToString().Substring(0, 6);
            var newUrl = new ShortUrl
            {
                OriginalUrl = request.OriginalUrl,
                ShortCode = shortCode,
                CreatedBy = User.Identity?.Name,
                CreatedDate = DateTime.UtcNow
            };

            _context.ShortUrls.Add(newUrl);
            _context.SaveChanges();

            return Ok(newUrl);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteShortUrl(int id)
        {
            var url = _context.ShortUrls.Find(id);
            if (url == null)
            {
                return NotFound("URL not found.");
            }

            _context.ShortUrls.Remove(url);
            _context.SaveChanges();

            return NoContent();
        }
    }

    public class CreateUrlRequest
    {
        public string OriginalUrl { get; set; }
    }

}
