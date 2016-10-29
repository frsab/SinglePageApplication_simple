using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SinglePageApplication_simple.Models
{
    public class Client
    {
        public int ID { get; set; }
        public String Login { get; set; }
        public String Password { get; set; }
        public DateTime InscriptionDate { get; set; }

    }
}
