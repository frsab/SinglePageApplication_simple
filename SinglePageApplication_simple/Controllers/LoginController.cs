using SinglePageApplication_simple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SinglePageApplication_simple.Controllers
{
    public class LoginController : ApiController
    {
        private SinglePageApplication_simpleContext db1 = new SinglePageApplication_simpleContext();

        [AllowAnonymous]
        [HttpPost]
        public HttpResponseMessage Login(User user)
        {
            if(user==null || !ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Unauthorized,
                    "apparemment il n'y a pas d'utilisateur avec ce nom");
            }

            UserModel userResult = null;
            userResult = this.GetUsers().FirstOrDefault(u => u.Login == user.login);
            if(userResult!=null && user.password.Equals(userResult.Password))
            {
                return Request.CreateResponse(HttpStatusCode.OK, Convert.ToBase64String(Guid.NewGuid().ToByteArray()));
            }

            return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, 
                "Votre mot de passe est incompatible avec votre Login");
        }

        public IQueryable<UserModel> GetUsers()
        {
            // return db1.Users;
            return null;

        }

    }
}
