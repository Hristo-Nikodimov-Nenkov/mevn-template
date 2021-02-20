export default {
    homeGet: (req, res) => {
        console.log("homeGet");
        res.status(200).send("This is API!");
    }
}
