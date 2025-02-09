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
          Apni nijeke please nesha drobbo, ulto palta time e ar ulto palta jinish khaoya, self doubt, depression, 
          nijer toxic classmates ar nijeke weird bhaba theke dure thakben.
          Just a friendly advise.
          Ami kono din e chaini amader somporko ta erom kore sesh hoye jak .

          Bhebechilam amra ager moton kotha bolte suru korle sobh thik hoye jabe abar notun kore somporko
          ta start korte cheyechilam ager baar jei bhul gulo korechilam sei gulo thik korte cheyechilam. 
          But tui to icche more geche bole chole geli , ami toke mananor onek chesta korechi kintu tor jokhon
          akdom e ar icche nei aj theke toke messege kore, instagram e follow request pathiye, bar bar 
          dekha korte bole birokto korbo na.
          Ar dekh tui amar jnno kono din e option chilis na one and only choice chilis tai tui icche more geche bole 
          sobh kichu sesh korleo ami parini sobh kichu bhule jete ar parbo boleo mone hoy na. Kono icche hole fere ashis 
          opekha korbo tor jnno na ashleo kono oshubidha nei.
          
          Bhalo thakis ar nijer ektu jotno koris jotno I mean rupchorcha r kotha bolini tui tor moton kore perfect
          nijer sorir e jotno nis, thik thak time e khas na ghumash o na, khub Lyadhkhor tui😄.
          Tata, Happy Birthday.
      
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          From Your's Truely Meow😊
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
