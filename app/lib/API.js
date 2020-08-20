class API {
  constructor() {
    this.API_URL = 'https://barkwire-api.herokuapp.com/dogs';
    // returning a mock api since the orignal api has been dropped
    this.dogs = [
      {
        id: 1,
        name: 'Puppy mcPuppies',
        description: 'Good boi',
        imageCaption: 'A dog',
        imageUrl: 'http://place-puppy.com/200x200 ',
      },
      {
        id: 2,
        name: 'Fluffygins',
        description: 'Such doggo',
        imageCaption: 'Another dog',
        imageUrl: 'http://place-puppy.com/200x200 ',
      },
      {
        id: 3,
        name: 'doggo',
        description: 'Much wuf',
        imageCaption: 'Yet another dog',
        imageUrl: 'http://place-puppy.com/200x200 ',
      },
    ];
  }
  getDogs() {
    return Promise.resolve({
      dogs: this.dogs,
    });
  }
  getDog(id) {
    return Promise.resolve({
      dog: this.dogs.filter((puppy) => puppy.id == id)[0],
    });
  }
}
