// ERROR Middleware || NEXT function

const errorMiddleware = (err, req, res, next) => {
    const defaultErrors = {
        statusCode: 500,
        message: "Something Went Wrong"
    }


    //missing filed error
    if (err.name === "ValidationError") {
        defaultErrors.statusCode = 400
        defaultErrors.message = Object.values(err.errors).map(item => item.message).join(",");
    }
    // duplicate error
    if (err.code && err.code === 11000) {
        defaultErrors.statusCode = 400;
        defaultErrors.message = `${Object.keys(
            err.keyValue
        )} fiels has to be unique`;
    }

    res.status(defaultErrors.statusCode).json({ message: defaultErrors.message });

}

export default errorMiddleware;