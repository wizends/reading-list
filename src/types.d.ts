export interface IBook {
   book:{ 
        title:    string;
        pages:    number;
        genre:    string;
        cover:    string;
        synopsis: string;
        year:     number;
        ISBN:     string;
        author:   Author; 
    }
}

export interface IAuthor {
    name:       string;
    otherBooks: string[];
}


export enum BooksType {
    ToRead = 'toread',
    Library = 'library'
}

export enum GenreType {
    Fantasia = 'Fantasía',
    CienciaFiccion = 'Ciencia ficción',
    Zombies = 'Zombies',
    Terror = 'Terror',
    Todas = 'todas'
}