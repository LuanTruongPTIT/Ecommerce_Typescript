export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}
export enum TokenType {
  AccessToken,
  RefreshToken,
  forgotPasswordToken,
  EmailVerifyToken
}
export enum MediaType {
  Image,
  Video,
  Hls
}
