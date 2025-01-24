import { db } from './firebase'
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    CollectionReference,
    DocumentData
} from 'firebase/firestore'

export async function addDocument(collectionName: string, data: DocumentData): Promise<void> {
    try {
        const docRef = await addDoc(collection(db, collectionName), data)
        console.log('Document written with ID:', docRef.id)
    } catch (e) {
        console.error('Error adding document:', e)
    }
}

export async function getAllDocuments(collectionName: string): Promise<void> {
    const querySnapshot = await getDocs(collection(db, collectionName))
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data())
    })
}

export async function updateDocument(
    collectionName: string,
    docId: string,
    newData: Partial<DocumentData>
): Promise<void> {
    const docRef = doc(db, collectionName, docId)
    try {
        await updateDoc(docRef, newData)
        console.log('Document updated')
    } catch (e) {
        console.error('Error updating document:', e)
    }
}

export async function deleteDocument(collectionName: string, docId: string): Promise<void> {
    const docRef = doc(db, collectionName, docId)
    try {
        await deleteDoc(docRef)
        console.log('Document deleted')
    } catch (e) {
        console.error('Error deleting document:', e)
    }
}