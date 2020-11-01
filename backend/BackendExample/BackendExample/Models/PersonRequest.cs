using Microsoft.AspNetCore.Http;

namespace BackendExample.Models
{
    public class PersonRequest
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IFormFile Avatar { get; set; }
    }
}
