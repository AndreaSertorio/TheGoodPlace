const { db, collection, addDoc, doc, setDoc } = require('./firebase'); // Modifica con il percorso corretto al tuo file di configurazione Firebase

const userExample = {
    nome: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    punteggioMedio: 8,
    punteggioAlto: 10,
    follower: ['userId1', 'userId2'],
    seguiti: ['userId3', 'userId4']
};

const postExample = {
    userId: 'userIdExample',
    contenuto: 'Questo è un post di esempio.',
    punteggio: 9,
    voti: ['userId1', 'userId2']
};

async function addExampleDocuments() {
    try {
        await setDoc(doc(collection(db, 'Users'), 'userIdExample'), userExample);
        console.log('Documento utente di esempio aggiunto!');
        
        await addDoc(collection(db, 'Posts'), postExample);
        console.log('Documento post di esempio aggiunto!');
    } catch (error) {
        console.error('Errore nell’aggiunta dei documenti di esempio:', error);
    }
}

addExampleDocuments();
