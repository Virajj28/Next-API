export default function handler (req,res) {
    const params = req.query.params;
    // here params is file name
    console.log(params)
    res.status(200).json(params);
}