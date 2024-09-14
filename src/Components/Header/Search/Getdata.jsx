import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../../Firebase.jsx';
import { useEffect } from 'react';

export function GetData() {
  const ref = collection(db, "products");
  const [data, loading, error] = useCollectionData(ref);

  // localStorage'a veri kaydetmek için useEffect kullanın
  useEffect(() => {
    if (data) {
      localStorage.setItem('productList', JSON.stringify(data));
    }
  }, [data]); // 'data' değiştiğinde çalışır

  return { data, loading, error };
}
