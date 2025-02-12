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
Tui hoyeto bhebechis tui jaoya niye raag kore chilis bole ami tor upor jed kore toke cut off kore diyechilam kintu ashole e bepar ta seta chilo na cutoff korar reason ta ekhane bolte parbo na karon text ta tale onek boro hoye jabe pore jiggesh koris bole debo . Ha eta sotti amar method ta bhul chilo kintu amar tor upor raag korar reasons chilo . Ar dekh ami desperate na tor sathe relationship e ashar jnno tui amar jnno kono din e option chilis na one and only choice chilis tai ami toke mananor chesta korechilam karon ami toke amar life theke harate chaina tor upor ami kono din give up korte chai ni kintu tui ki bolli tor icche more geche ami toke jor korchi. Jai hok puruno kotha baad de tui jokhon cholei jete cheychis jaa ar atkabo na toke. Aj theke ar message kore, Instagram e follow request pathiye, bar bar dekha korte bole birokto korbo na. Sudhu etai bolbo tui amay bhul bhujechilis.
          Bhalo thakis ar nijer ektu jotno koris jotno I mean rupchorcha r kotha bolini toke sobh somoy sundor lage just porer baar saree porle onno juto poris. Nijer sorir e jotno nis tui thik thak time e khas o na ghumash o na, khub Lyadhkhor tui😄.
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
