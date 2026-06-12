import path from "path";
<<<<<<< HEAD
import multer, { MulterError } from "multer";
=======
import multer from "multer";
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
import { v4 } from "uuid";

/** MULTER IMAGE UPLOADER */
function getTargetImageStorage(address: any) {
<<<<<<< HEAD
    return multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file , cb) {
            const extension = path.parse(file.originalname).ext;
            const random_name= v4() + extension;
            cb(null, random_name);
        },
        });
    }
const makeUploader = ( address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({storage:storage});
};

export default makeUploader;

/*const product_storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/products');
    },
    filename: function (req, file, cb) {
=======
    return multer.diskStorage ({
        destination: function(req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
          filename: function(req, file, cb) {
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
        console.log(file);
        const extension = path.parse(file.originalname).ext;
        const random_name = v4() + extension;
        cb(null, random_name);
    },
<<<<<<< HEAD
});

export const uploadProductImage = multer({storage: product_storage});
*/
=======
    });
}


const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer ({storage:storage});
};
export default makeUploader;


// const product_storage = multer.diskStorage({
//     destination: function(req,file,cb) {
//         cb(null, './uploads/members');
//     },
//     filename: function(req, file, cb) {
//         console.log(file);
//         const extension = path.parse(file.originalname).ext;
//         const random_name = v4() + extension;
//         cb(null, random_name);
//     },
// })

// export const uploadProductImage = multer({storage: product_storage});
>>>>>>> 48196a430d0ecbd637ce80d0ad838c6c75ede2c8
