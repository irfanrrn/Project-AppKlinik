var connection = require('../library/database');

const getAllAdministrator = function (req, res) {
    connection.query('SELECT * FROM tbl_administrators', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_administrator: ''
            });
        } else {
            res.json( {
                data_administrator: rows
            });
        }
    });
}

const getAdministratorId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_administrators WHERE admin_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_administrator: ''
            });
        } else {
            res.json( {
                data_administrator: rows
            });
        }
    });
}

const createAdministrator = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!username) {
        errors.push('Field username belum diisi, mohon isi dengan lengkap.');
    }

    if (!email) {
        errors.push('Field email belum diisi, mohon isi dengan lengkap.');
    } else if (!emailRegex.test(email)) {
        errors.push('Format email tidak valid, mohon isi dengan email yang benar.');
    }

    if (!password) {
        errors.push('Field password belum diisi, mohon isi dengan lengkap.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    connection.query(`INSERT INTO tbl_administrators (username, email, password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
        if (err) {
            res.json({ pesan: 'Data gagal disimpan' });
        } else {
            res.send('Data berhasil disimpan!');
        }
    });
}

const updateAdministrator = function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
        errors.push('Field username tidak boleh kosong!');
    }

    if (!email) {
        errors.push('Field email tidak boleh kosong!');
    } else if (!emailRegex.test(email)) {
        errors.push('Format email tidak valid, mohon isi dengan email yang benar.');
    }

    if (!password) {
        errors.push('Field password tidak boleh kosong!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    connection.query(
        `UPDATE tbl_administrators SET username = ?, email = ?, password = SHA2(?, 512) WHERE admin_id = ?`, 
        [username, email, password, id], 
        function(err, result) {
            if (err) {
                res.status(500).json({ pesan: 'Data gagal diupdate', error: err });
            } else {
                res.send('Data berhasil diupdate!');
            }
        }
    );
}

const deleteAdministrator = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_administrators WHERE admin_id = ?', [id], function(err, result) {
        if (err) {
            res.status(500).send({ pesan: 'Terjadi kesalahan', error: err });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ pesan: 'ID tidak ada' });
            } else {
                res.send('Data berhasil dihapus!');
            }
        }
    });
};

module.exports = {
    getAllAdministrator,
    getAdministratorId,
    createAdministrator,
    updateAdministrator,
    deleteAdministrator
}