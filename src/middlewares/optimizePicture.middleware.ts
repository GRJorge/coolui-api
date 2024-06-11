import { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import sharp from 'sharp';

export default function optimize(req: Request, res: Response, next: NextFunction) {
    if (req.file) {
        sharp(req.file!.path)
            .resize(128)
            .webp()
            .toFile(`uploads/profilePictures/${req.file!.filename.split('.').slice(0, -1)}.webp`)
            .then(() => {
                fs.unlink(req.file!.path, () => {
                    next();
                });
            });
    } else {
        next();
    }
}
