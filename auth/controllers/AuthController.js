//JWT implementation needs to happen later

//Needs to generate access token


module.exports = {
    register: (req, res) => {
        const payload = req.body;

        let encryptedPassword = encryptPassword(payload.password);
        let role = payload.role

        if (!role) {
            role = roles.USER;
        }

        UserModel.createUser(
            Object.assign(payload, {password: encryptedPassword, role})
        )
        .then((user)=> {
            //generates accesstoken for user, which happens upen every request
            const accessToken = generateAccessToken(payload.username, user.id)

            return res.status(200).json({
                status: true,
                data: {
                    user: user.TOJSON(),
                    token: accessToken
                }
            });
        })
        .catch((err)=> {
            return res.status(500).json({
                status: false,
                error: err
            });
        })
    }
}