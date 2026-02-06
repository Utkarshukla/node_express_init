/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const testHandler = (req, res, next) => {
    const appHeader = req.header('X-APP');

    console.log(appHeader || 'Unknown');

    if (appHeader !== 'Utkarsh') {
        return res.status(401).json({
            message: 'Unauthorized: Invalid X-APP header'
        });
    }

    next();
};
