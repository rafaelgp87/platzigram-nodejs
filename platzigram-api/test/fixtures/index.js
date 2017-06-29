module.exports = {
  getImage () {
    return {
      id: '6a238b19-3ee3-4d5c-acb5-944a3c1fb407',
      publicId: '3ehqEZvwZByc6hjzgEZU5p',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/3ehqEZvwZByc6hjzgEZU5p.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '1b85bc67-4678-476b-aa57-399f4d6d241e',
      name: 'Rafael Gutiérrez',
      username: 'rafaelgp87',
      email: 'rafaelgp87@gmail.com',
      password: 'pl4tzi',
      createAt: new Date().toString()
    }
  }
}
