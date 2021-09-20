import { motion } from 'framer-motion'

const Message = (props) =>{
    
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
        >   
            {props.children}</motion.div>
    )
}
export default Message