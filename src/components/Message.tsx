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
 Apni nijeke please nesha drobbo, ulto palta time e ar ulto palta jinish khaoya, self doubt, depression, nijer toxic classmates ar nijeke weird bhaba theke dure thakben.
          Just a friendly advise.
          Ami kono din e chaini amader somporko ta erom kore sesh hoye jak .
Tui hoyeto bhebechis tui jaoya niye raag kore chilis bole ami tor upor raag kore toke cut off kore diyechilam kintu ashole e bepar ta seta chilo na cutoff korar reason ta ekhane bolte parbo na karon text ta tale onek boro hoye jabe tui sotti jante chaile bole debo . Ha eta sotti amar reasons chilo tor upor raag korar kintu amar method ta bhul chilo. Ar dekh ami desperate na tor sathe relationship e ashar jnno tui amar jnno kono din e option chilis na one and only choice chilis tai ami bhebechilam toke ar ekbar mananor chesta kori karon ami toke amar life theke harate chaini kintu tui to bhabli ami toke jor korchi amar sathe relationship e ashar jnno.Sudhu eta bolbo amra dujonei kintu arekbar chesta kore dekhtei partam. 
          Jai hok baad de eishob nijer life e focus kor jeta hoye geche seta to ami bodla te parbo na ar notun kore tui start o korbi na to, aj theke ar message kore, Instagram e follow request pathiye, bar bar dekha korte bole toke birokto korbo na.
          Bhalo thakis ar nijer ektu jotno koris jotno I mean rupchorcha r kotha bolini tui tor moton kore perfect nijer sorir e jotno nis, thik thak time e khas na ghumash o na, khub Lyadhkhor tui😄.
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
