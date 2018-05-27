// import * as functions from 'firebase-functions';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
function updateNews(id, userInfo) {
    const documentRef = admin.firestore().doc('news/' + id);
    return documentRef.update({
        ownerFirstName: userInfo.firstName,
        ownerMiddleName: userInfo.middleName,
        ownerLastName: userInfo.lastName
    });
}
exports.newNews = functions.firestore
    .document('news/{newsId}')
    .onCreate((snap, context) => {
    const documentRef = admin.firestore().doc('news/' + snap.id);
    documentRef.update({
        uid: snap.id
    });
    return snap;
});
exports.updatedUser = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
    const data = change.after.data();
    const userId = data.uid;
    admin.firestore().collection('news')
        .where('ownerUid', '==', userId)
        .get()
        .then(results => {
        results.forEach(result => {
            updateNews(result.id, data);
            // console.log('burger matches in parent collection', result.id);
        });
        //console.log('Found ${results.size} matches in parent collection');
    });
    return change;
});
//# sourceMappingURL=index.js.map