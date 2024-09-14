import { createTransform } from 'redux-persist';

// Veriyi persist etmeden önce serialize işlemi yapıyoruz
export const authTransform = createTransform(
  // persist (kaydetme) sırasında:
  (inboundState) => {
    console.log("Inbound State (Serialize):", inboundState); // Debug
    return JSON.stringify(inboundState);
  },
  
  // rehydrate (geri yükleme) sırasında:
  (outboundState) => {
    console.log("Outbound State (Deserialize):", outboundState); // Debug
    return JSON.parse(outboundState);
  },
  
  { whitelist: ['auth'] } // Sadece 'auth' state'ini bu transform ile işliyoruz
);
