/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = app => {
    app.get("/liste", (req, res) => {
        res.render('listeEtudiants', {etudiants : ["WABO Arnold", "WAFO Harrold", "WANE Denis", "YEPMO Véronne"]});
    });
};

