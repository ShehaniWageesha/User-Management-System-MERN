const AWS = require('aws-sdk');
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET_NAME } = require('../config');

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

function getSignedURL({ key, type, bucket }) {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: bucket,
        Key: key,
        ContentType: type,
      },
      (err, url) => {
        if (err) {
          reject(err);
        }
        resolve({ key, url });
      }
    );
  });
}

function uploadFile({ key, body, contentType }) {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: AWS_BUCKET_NAME,
        Key: key,
        Body: body,
        ContentType: contentType,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve({ key, data });
      }
    );
  });
}

function deleteFile({ key }) {
  return new Promise((resolve, reject) => {
    s3.deleteObject(
      {
        Bucket: AWS_BUCKET_NAME,
        Key: key,
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve({ key, data });
      }
    );
  });
}

module.exports = {
  getSignedURL,
  uploadFile,
  deleteFile,
};
