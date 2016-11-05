using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace SinglePageApplication_simple
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            Console.WriteLine("hello, I'm inWebApiApplication : System.Web.HttpApplication ");
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
