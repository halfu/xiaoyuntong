login
	POST '/login' 
	l_email, l_pwd(md5), type(1,2), token(time)
register
	post '/register'
    r_email, r_pwd, r_pwd_again(md5), token(time)

return
	{status: true, type: 100, info: "Sucess"}
	{status: false, type: 20, info: "Unable Error"}
	{status: false, type: 1001, info: "email format error"}
	{status: false, type: 1002, info: "password format error"}
	{status: false, type: 1003, info: "type error"}
	{status: false, type: 1004, info: "email "}
	{status: false/true, type: 100, info: "Sucess"}
	{status: false/true, type: 100, info: "Sucess"}
	{status: false/true, type: 100, info: "Sucess"}
