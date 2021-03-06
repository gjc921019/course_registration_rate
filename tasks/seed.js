//Jiacheng Guo
const dbConnection = require("../database/data/mongoConnection")
const data = require("../database/data");
const students = data.students;
const courses = data.courses;

const main = async () => {
    const db = await dbConnection();
    await db.dropDatabase();
    let JG = await students.create("gjc921019","password","Guo","Jiacheng",10442082,2,9);
    let YL = await students.create("ly930919","password","Li","Yi",10442083,2,6);
    let ABC = await students.create("abc123", "123456", "Doe", "John", 10101010,4,29);
    let tester = await students.create("tester", "test", "T", "S", 11111111,1,0);


    JG = await students.updateFinishedCourses("gjc921019",["cs561","cs570","cs571"]);
    JG = await students.updateCurrentCourses("gjc921019",["cs546","ee551"]);
    YL = await students.updateCurrentCourses("ly930919",["cs561"]);
    YL = await students.updateFinishedCourses("ly930919",["cs570","cs571"]);
    ABC = await students.updateFinishedCourses("abc123",["cs561","cs570","cs571","cs501","cs550","cs551","ee515","ee509","ee516","cs520"]);
    ABC = await students.updateCurrentCourses("abc123",["ee551"]);
    //console.log(JG);
    //computer science
    const course1 = await courses.addCourse(1,"cs501","Introduction to Java Programming",3,"Computer Science",5,"Monday 6pm to 9pm","BC 108","Dov Kruger",[],[],
    "An introduction to the Java programming language for those students who have little or no programming background. It is intended as an elective for the Master of Science in Information Systems to be taken near the end of the program. Basic topics considered will be programs and program structure in general and Java syntax, data types, flow of control, classes, methods and objects, arrays, exception handling, and recursion. In addition, the use of Java in enterprise-wide computing and distributed systems will be introduced by considering APIs in general, and the ones specific to JDBC and the Java security features in particular.");
    const course2 = await courses.addCourse(2,"cs520","Introduction to Operating System",3,"Computer Science",4,"Monday 3pm to 6pm","B 118","Igor Faynberg",["cs570"],[],
    " The use and internals of modern operating systems. Lectures focus on internals, whereas programming assignments focus on use of the operating system interface. Major topics include: the process concept; concurrency and how to program with threads; memory management techniques, including virtual memory and shared libraries; file system data structures; and I/O");
    const course3 = await courses.addCourse(3,"cs521","TCP/IP Networking",3,"Computer Science",5,"Tuesday 6pm to 9pm","NB 105","Sandeep Bhatt",["cs520"],[],
    "Introduction to IP networking. Examination of all layers of the OSI stack. Detailed examination of the IP, ICMP, UDP, and TCP protocols. Basic concepts of network design: end-to-end principle, routing, encapsulation, flow control, congestion control, and security. Detailed coverage of TCP. Some treatment of important Internet applications and services. Emphasis on network layer and above. Assignments focus on protocols and software.");
    const course4 = await courses.addCourse(4,"cs522","Mobile Systems and Applications",3,"Computer Science",3,"Wednesday 6pm to 9pm","BC 315","Dominic Duggan",["cs570","cs550"],[],
    "This course introduces the field of mobile computing and the closely related field of pervasive computing. Topics covered include: mobile hardware, wireless communication, ubiquitous data access, resource scarcity, sensing and actuation, location and context awareness, security and privacy, design methodologies and infrastructure, and end-to-end application considerations.");
    const course5 = await courses.addCourse(5,"cs546","Web Programming",3,"Computer Science",5,"Thursday 6pm to 9pm","NB 106","Patrick Hill",["cs561","cs570"],[],
    "This course will provide students with a first strong approach of internet programming. It will give the basic knowledge on how the Internet works and how to create advanced web sites by the use of script languages, after learning the basics of HTML. The course will teach the students how to create a complex global site through the creation of individual working modules, giving them the skills required in any business such as proper team work and coordination between groups. ");
    const course6 = await courses.addCourse(6,"cs550","Computer Organization and Programming",3,"Computer Science",3,"Monday 1pm to 4pm","B 210","Jack Lee",[],["cs551"],
    "This course provides an intensive introduction to material on computer organization and assembly language programming required for entrance into the graduate program in Computer Science or Computer Engineering. The topics covered are: structure of stored program computers; linking and loading; assembly language programming, with an emphasis on translation of high-level language constructs; data representation and arithmetic algorithms; basics of logic design; processor design: data path, hardwired control and microprogrammed control. Students will be given assembly language programming assignments on a regular basis");
    const course7 = await courses.addCourse(7,"cs551","Lab for Computer Organization and Programming",1,"Computer Science",1,"Monday 5pm to 7pm","B 210","Jack Lee",[],["cs550"],
    "This is the lab for CS 550");
    const course8 = await courses.addCourse(8,"cs554","Web Programming 2",3,"Computer Science",2,"Friday 6pm to 9pm","BC 207","Patrick Hill",["cs546"],[],
    "This course focuses on teaching students the newest technologies available in Web Programming. Topics include advanced client side programming, responsive design, NoSQL databases, JQuery, AJAX, Web Site security, and the latest Frameworks. Students will be given the opportunity to suggest topics they would like to discover at the end of the semester. The course is a very hands-on course where everything taught will be practiced through in-class exercises.");
    const course9 = await courses.addCourse(9,"cs561","Database Management",3,"Computer Science",2,"Friday 3pm to 5pm", "NB 106","Sam Lee",["cs570"],[],
    "Introduction to the design and querying of relational databases. Topics include: relational schemas; keys and foreign key references; relational algebra (as an introduction to SQL); SQL in depth; Entity-Relationship (ER) database design; translating from ER models to relational schemas and from relational schemas to ER models; functional dependencies; and normalization");
    const course10 = await courses.addCourse(10,"cs570","Data Structure",3,"Computer Science",5,"Tuesday 10Am to 1pm","BC 108","Iraklis Tsekourakis",[],["cs571"],
    "Introduction to programming, data structures, and algorithm design, using one or more modern imperative language9s), as chosen by the instructor. Students will learn: basic programming constructs, data types, advanced and/or balanced search trees; hashing; asymptotic complexity analysis; standard algorithm design techniques; graph algorithms; sort algorithms; and other “classic’ algorithms that serve as examples of design techniques. Students will be given regular programming assignments.");
    const course11 = await courses.addCourse(11,"cs571","Data Structure Lab",1,"Computer Science",5,"Tuesday 3pm to 5pm", "BC 108","Iraklis Tsekourakis",[],["cs570"],
    "This is the lab for CS 570");
    const course12 = await courses.addCourse(12,"cs600","Advanced Algorithm Design",3,"Computer Science",1,"Thursday 6pm to 9pm", "NB 105","Reza Peyrovian",["cs550","cs570"],[],
    "Design, implementation, and asymptotic time and space analysis of advanced algorithms, as well as analyzing worst-case and average-case complexity of algorithms. Students will be expected to run experiments to test the actual performance of the algorithms on sample inputs. Introduction to NP-complete problems and approximation algorithms")
    //Electrical Engineering
    const course13 = await courses.addCourse(13,"ee509","Intermediate Waves and Optics",3,"Electrical Engineering",3,"Tuesday 3pm to 6pm", "B 318","Sam Will",[],[],
    "The general study of field phenomena; scattering and vector fields and waves; dispersion, phase, and group velocity; interference, diffraction, and polarization; coherence and correlation; and geometric and physical optics");
    const course14 = await courses.addCourse(14,"ee515","Photonics",3,"Electrical Engineering",5,"Tuesday 6pm to 9pm", "B 106","Michel Wang",["ee509"],[],
    "This course will cover topics encompassing the fundamental subject matter for the design of optical systems. Topics will include optical system analysis, optical instrument analysis, applications of thin-film coatings and opto-mechanical system design in the first term. The second term will cover the subjects of photometry and radiometry, spectrographic and spectrophotometric systems, infrared radiation measurement and instrumentation, lasers in optical systems and photonelectron conversion");
    const course15 = await courses.addCourse(15,"ee516","Photonics 2",3,"Electrical Engineering",1,"Thursday 1pm to 3pm", "BC 406","Michel Wang",["ee515"],[],
    "This course will cover topics encompassing the fundamental subject matter for the design of optical systems. Topics will include optical system analysis, optical instrument analysis, applications of thin-film coatings and opto-mechanical system design in the first term. The second term will cover the subjects of photometry and radiometry, spectrographic and spectrophotometric systems, infrared radiation measurement and instrumentation, lasers in optical systems and photonelectron conversion");
    const course16 = await courses.addCourse(16,"ee551", "Engineering Programming: Python",3,"Electrical Engineering",0,"Wednesday 3pm to 5pm", "BC 310","Michel Zhang",[],[],
    "This course presents tool, techniques, algorithms, and programming techniques using the Python programming language for data intensive applications and decision making. The course formally introduces techniques to: (i) gather,(ii) store, and (iii) process large volumes of data to make informed decisions. Such techniques find applicability in many engineering application areas, including communications systems, embedded systems, smart grids, robotics, Internet, and enterprise networks, or any network where information flows and alters decision making.");
    //add comments
    await courses.addCommentByCourseID(1,"fakeUser1","This is a very good course",5);
    await courses.addCommentByCourseID(1,"fakeUser2","I don't like this course",1);
    await courses.addCommentByCourseID(1,"fakeUser3","This course may be too easy for graduate student",2);
    await courses.addCommentByCourseID(1,"fakeUser4","The professor of CS 501 is pretty good",4);
    await courses.updateAvgRatingByCourseID(1);

    await courses.addCommentByCourseID(2,"fakeUser1","The professor of this course has strong accent,which makes it very hadr to follow him",1);
    await courses.addCommentByCourseID(2,"fakeUser2","I don't like this course, too hard",2);
    await courses.addCommentByCourseID(2,"fakeUser3","This course may be not too friendly for new CS student. Very tough",1);
    await courses.addCommentByCourseID(2,"fakeUser4","Although the course itself is hard, the professor of CS 520 is pretty good and respnsible",3);
    await courses.updateAvgRatingByCourseID(2);

    await courses.addCommentByCourseID(3,"fakeUser1","Every useful course, Highly recommend",5);
    await courses.addCommentByCourseID(3,"fakeUser2","Fundamental CS course, userful",4);
    await courses.updateAvgRatingByCourseID(3);

    await courses.addCommentByCourseID(4,"fakeUser1","Homework is too tough!!!!",2);
    await courses.addCommentByCourseID(4,"fakeUser2","The materials that professor use is too old. Not a good course",1);
    await courses.addCommentByCourseID(4,"fakeUser3","This course may be not too friendly for new CS student. Very tough",3);
    await courses.updateAvgRatingByCourseID(4);

    await courses.addCommentByCourseID(5,"fakeUser1","VERY USEFUL course!!!! You have to choose this one",5);
    await courses.addCommentByCourseID(5,"fakeUser2","The assignments are too much and the grading method is too strict!!!",2);
    await courses.addCommentByCourseID(5,"fakeUser3"," Final is a project, by which you can learn and practice lots of techs you learned ",4);
    await courses.addCommentByCourseID(5,"fakeUser4","I pay 500 dollars for each 2.5 hours course and professor always shrink it to 1 hour!!!! Give half of my money back!!!",1);
    await courses.updateAvgRatingByCourseID(5);

    await courses.addCommentByCourseID(6,"fakeUser1","One of the fundamental course for CS. Good for new CS student",4);
    await courses.addCommentByCourseID(6,"fakeUser2","Too easy for CS graduate student. Don't know why make it one of the mendatory courses for CS",1);
    await courses.addCommentByCourseID(6,"fakeUser3"," Professor is nice and homework is super easy ",4);
    await courses.updateAvgRatingByCourseID(6);

    await courses.addCommentByCourseID(7,"fakeUser1","Lab is very good. You can practice what you learned from the course",5);
    await courses.updateAvgRatingByCourseID(7);

    await courses.addCommentByCourseID(8,"fakeUser1","Much harder than CS546. Be careful.",4);
    await courses.addCommentByCourseID(8,"fakeUser2","Really useful courses. Good for students who are looking for front-end job",5);
    await courses.addCommentByCourseID(8,"fakeUser3"," Final project is very complicated but meanningful practice",4);
    await courses.addCommentByCourseID(8,"fakeUser4","I love Professor Patrick Hill. Please give us project 100",5);
    await courses.updateAvgRatingByCourseID(8);

    await courses.addCommentByCourseID(9,"fakeUser1","VERY USEFUL course!!!! You have to choose this one",5);
    await courses.addCommentByCourseID(9,"fakeUser2","Professor is so fking nice!!!! I love him",5);
    await courses.addCommentByCourseID(9,"fakeUser3"," The best course in SIT",5);
    await courses.addCommentByCourseID(9,"fakeUser4","This course is very easy but the exam is kind of hard",4);
    await courses.updateAvgRatingByCourseID(9);

    await courses.addCommentByCourseID(10,"fakeUser1","The worst course in SIT. No doubt",1);
    await courses.addCommentByCourseID(10,"fakeUser2","Professor is not responsible enough and the course itself sucks",1);
    await courses.updateAvgRatingByCourseID(10);

    await courses.addCommentByCourseID(11,"fakeUser1","Lab is a waste of time too",1);
    await courses.addCommentByCourseID(11,"fakeUser2","Sucks!!!!!!",1);
    await courses.updateAvgRatingByCourseID(11);

    await courses.addCommentByCourseID(12,"fakeUser1","This course is useful but the professor himself is not very good",3);
    await courses.addCommentByCourseID(12,"fakeUser2","Professor use other's PPT. Sometimes he even does not know what he is talking about",1);
    await courses.updateAvgRatingByCourseID(12);

    await courses.addCommentByCourseID(13,"fakeUser1","This course is very good",4);
    await courses.addCommentByCourseID(13,"fakeUser2","Assignment is too easy. Not good for professional EE student",2);
    await courses.updateAvgRatingByCourseID(13);

    await courses.addCommentByCourseID(14,"fakeUser1","Useful course",4);
    await courses.addCommentByCourseID(14,"fakeUser2","Professor is very good",4);
    await courses.updateAvgRatingByCourseID(14);

    await courses.addCommentByCourseID(15,"fakeUser1","The worst course in SIT. No doubt",1);
    await courses.addCommentByCourseID(15,"fakeUser2","Not good as CS515",2);
    await courses.updateAvgRatingByCourseID(15);

    await courses.addCommentByCourseID(16,"fakeUser1","Tooooooooo easy!!!! Cannot learn anything new",1);
    await courses.addCommentByCourseID(16,"fakeUser2","Useless for CS major student. Maybe good for EE student who want to learn some basic Python language",2);
    await courses.updateAvgRatingByCourseID(16);

    console.log("Done seeding");
    await db.serverConfig.close();
};

main().catch(console.log);