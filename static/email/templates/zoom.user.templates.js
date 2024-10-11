const generateZoomUserTemplate = (link) => {
    return `
        <div style="margin: 0 auto; max-width: 480px; width: 100%; padding: 0 15px;">
            <div style="margin: 30px auto; max-width: 480px; width: 100%; height: 600px; background-color: #376FFF; border-radius: 10px;">
                <h1 style="font-family: 'Montserrat', sans-serif; padding-top: 100px auto; text-align: center; font-weight: 700; font-size: 50px; color: #fff;">Welcome to</h1>
                <img src="./lofo.svg" alt="Logo" style="margin: 50px auto 30px auto;">
                <h2 style="margin: 0 auto; text-align: center; font-family: 'Montserrat', sans-serif; font-weight: 700; color: #fff;">Congratulations!</h2>
                <span style="display: block; background-color: #fff; text-align: center; width: 350px; height: 1px; margin: 20px auto;"></span>
                <a href="${link}" style="font-family: 'Montserrat', sans-serif; font-weight: 500; margin: 0 auto; text-align: center; display:block; color: #fff; text-decoration: none;">Click here to the join session</a>
            </div>
        </div>
    `
}

export default generateZoomUserTemplate;