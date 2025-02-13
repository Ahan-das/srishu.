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
Tui hoyeto bhebechis tui jaoya niye raag korechilis bole ami tor upor jed kore toke cut off kore diyechilam kintu ashole e bepar ta seta chilo na pore kono din jiggesh koris bole debo . Ha sotti ami bhul kore felechi . Tui amar jnno kono din e option chilis na one and only choice chilis tai ami toke mananor chesta korechilam karon ami toke amar life theke harate chaina tor upor ami kono din give up korte chai na kintu tui ki bolli tor icche more geche ami toke jor korchi, kintu actually cheyechilam tui amake just akta last chance diye dekhte partis promise korchi regret kortis na. 
          Bhalo thakis ar nijer ektu jotno koris jotno I mean rupchorcha r kotha bolini toke sobh somoy sundor lage just nijer sorir e jotno nis tui thik thak time e khas o na ghumash o na, khub Lyadhkhor tui😄.
         Ulto palta jinish dekhis na,Tata.

          
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          From Your's Truely Meow😊
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
