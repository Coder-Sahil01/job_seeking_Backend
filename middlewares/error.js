class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message||"Internal server error";
    err.statusCode=err.statusCode||500;

    if(err.name==="CaseError"){
        const message=`Resource not found .Invelid ${err.path}`;
        err=new ErrorHander(message,400);
    }
    if(err.code===11000){ //Databse error
        const message=`Duplicate ${Object.keys(err.keyValue)}`;
        err=new ErrorHander(message,400);
    }
    if(err.name==="JsonWebTokenError"){
        const message=`Json Web Token is Invalid,Try Again`;
        err=new ErrorHander(message,400);
    }
    if(err.name==="TokenExpiredError"){
        const message=`Json Web Token is Invalid,Try Again`;
        err=new ErrorHander(message,400);
    }
    return res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
};


export default ErrorHandler;