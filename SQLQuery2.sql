CREATE TABLE [dbo].[User]
(
	[ID] INT NOT NULL PRIMARY KEY, 
    [login] NVARCHAR(MAX) NOT NULL, 
    [password] NCHAR(10) NOT NULL
)
