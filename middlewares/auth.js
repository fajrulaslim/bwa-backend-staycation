const isLogin = (req, res, next) => {
    if(req.session.user == null || req.session.user == undefined) {
        req.flash('alertMessage', 'Silahkan login kembali.')
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/login')
    } else {
        next()
    }
} 

module.exports = isLogin