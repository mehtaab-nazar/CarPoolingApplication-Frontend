export class User {
  id: number;
  userId: string;
  emailId: string;
  password: string;
  firstName: string;
  lastName: string;
  dateCreated = Date;
  profileImage: string;
  isActive: boolean;
  constructor(
    id: number,
    userId: string,
    password: string,
    firstName: string,
    lastName: string,
    dateCreated = Date,
    profileImage: string,
    isActive: boolean
  ) {
    this.id = id;
    this.userId = userId,
    this.password = password,
    this.firstName = firstName,
    this.lastName = lastName,
    this.dateCreated = dateCreated,
    this.profileImage = profileImage,
    this.isActive = isActive
  }
}
