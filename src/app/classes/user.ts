export class User {
  fullName: string;
  username: string;
  phoneNumber: string;
  photoUrl: string;

  constructor({fullName, username, phoneNumber, photoUrl}) {
      this.fullName = fullName;
      this.username = username;
      this.phoneNumber = phoneNumber;
      this.photoUrl = photoUrl;
  }
}
