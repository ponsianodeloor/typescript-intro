interface AudioPlayer {
    volume: number;
    duration: number;
    title: string;
    details: Details;
}

interface Details {
    artist: string;
    album: string;
    genre: string;
}

const audioPlayer: AudioPlayer = {
    volume: 50,
    duration: 300,
    title: 'Song Title',
    details: {
        artist: 'Artist Name',
        album: 'Album Name',
        genre: 'Pop',
    },
};

// Destructuring
const { volume, duration, title, details } = audioPlayer;
console.log(volume, duration, title, details);

const { artist, album, genre } = details;
console.log(artist, album, genre);

// Destructuring with array
const dbz:string[] = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];
console.log(dbz[0], dbz[1], dbz[2], dbz[3]);
const [hero1, hero2, hero3, hero4] = dbz;
console.log(hero1, hero2, hero3, hero4);

export {};
