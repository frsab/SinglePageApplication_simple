﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SinglePageApplication_simple.Models
{
    public class SinglePageApplication_simpleContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public SinglePageApplication_simpleContext() : base("name=SinglePageApplication_simpleContext")
        {
        }

        public System.Data.Entity.DbSet<SinglePageApplication_simple.Models.Client> Clients { get; set; }
     //   public System.Data.Entity.DbSet<SinglePageApplication_simple.Models.UserModel> Users { get; set; }
    }
}
