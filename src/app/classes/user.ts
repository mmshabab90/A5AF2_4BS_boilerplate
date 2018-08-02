export class User {
  $key: string;
  fullName: string;
  username: string;
  phoneNumber: string;
  photoUrl: string;
  active: boolean = true

  constructor({fullName, username, phoneNumber, photoUrl, $key, active}) {
      this.fullName = fullName;
      this.username = username;
      this.phoneNumber = phoneNumber;
      this.photoUrl = photoUrl;
      this.$key = $key;
      this.active = active;
  }
}
