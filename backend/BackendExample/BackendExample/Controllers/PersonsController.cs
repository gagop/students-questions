using BackendExample.Models;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace BackendExample.Controllers
{
    [Route("api/persons")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] PersonRequest request)
        {
            FileInfo fi = new FileInfo(request.Avatar.FileName);
            using (FileStream streamTo = System.IO.File.Create(request.Avatar.FileName))
            using (Stream streamFrom = request.Avatar.OpenReadStream())
            {
                streamFrom.CopyTo(streamTo);
            }

            return Ok();
        }

    }
}
