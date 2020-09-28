const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
      },
    location: {
        type: String
    },
    status: {                           //post of developer, instructor or student
        type: String,
        required: true
    },
    skills: {                   
        type: [String],         
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: {
        type: [
            {
            title: {
                type: String,
                required: true
            },
            company: {
                type:String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
             description: {
                 type: String
             }
           
            }


         ]
    },
    education: [
        {
            school: {

                type: String,
                required : true
            },
            college: {

                type: String,
                required : true
            },
            ug: {
                
                type: String,
                required : true
            },
            fieldofstudy: {
                
                type: String,
                required : true
            },
            pg: {
                
                type: String
            },
            
            fieldofstudy: {
                
                type: String,
                required : true
            },
            from: {
                
                type: String,
                required : true
            },
            to: {

                type: Date
            },
            current: {

                type: Boolean,
                default: false
            },
             description: {

                 type: String
             }


        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Profile= mongoose.model('profile', ProfileSchema);