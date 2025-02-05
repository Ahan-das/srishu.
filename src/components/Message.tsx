import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Sristi,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happy Birthday Sristi many many happy returns of the day. Khub miss kori re toke.
          Bhalo thakis ar parle Apni nijeke please nesha drobbo, ulto palta time e ar ulto palta jinish
          khaoya, self doubt, depression, nijer toxic classmates ar nijeke weird bhaba theke dure thakben.
          Just a friendly advise.
          Ami bhebechilam amra ager moton kotha bolte suru korle sobh thik hoye jabe abar notun kore somporko
          ta start korte cheyechilam.Ami kono din e chaini amader somporko ta dujoner jed er jnno erom kore sesh hoye jak 
          kintu tui to icche more geche bole chole geli , ami toke mananor onek chesta korechi ar parchi na Sorry.
          Ajke theke toke messege kore, instagram e follow request pathiye, bar bar dekha korte bole birokto 
          korbo na.
          Tata,
          Bhalo thakis ar nijer ektu jotno koris, khub Lyadhkhor tui😄.
      
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          From Your's Truely Meow😊
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
