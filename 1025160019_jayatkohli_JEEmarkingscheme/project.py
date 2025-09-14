# JEE Style Quiz Program
questions = [
    {
        "ques": "1] If BACKSLASH has 50 members and 20 percent are in core team, how many are in the core team?",
        "options": ["a) 5", "b) 10", "c) 15", "d) 20"],
        "answer": "b"
    },
    {
        "ques": "2] What does SQL stand for?",
        "options": ["a) Structured Query Language", "b) Simple Query Logic", "c) Standard Question Language", "d) Sequential Query Language"],
        "answer": "a"
    },
    {
        "ques": "3] Who developed Python?",
        "options": ["a) Dennis Ritchie", "b) Bjarne Stroustrup", "c) Guido van Rossum", "d) James Gosling"],
        "answer": "c"
    },
    {
        "ques": "4] Whats the valid variable name in Python from the following?",
        "options": ["a) 123abc", "b) ch_1", "c) print", "d) jay@123"],
        "answer": "b"
    },
    {
        "ques": "5] Which programming language is primarily used for Android app development?",
        "options": ["a) Kotlin", "b) Swift", "c) JavaScript", "d) C"],
        "answer": "a"
    },
    {
        "ques": "6] What does HTTP stand for?",
        "options": ["a) HyperText Transfer Protocol", "b) High Tech Transfer Protocol", "c) Hyperlink Text Protocol", "d) None of these"],
        "answer": "a"
    },
    {
        "ques": "7] Which data type is immutable in Python?",
        "options": ["a) List", "b) Dictionary", "c) Set", "d) Tuple"],
        "answer": "d"
    },
    {
        "ques": "8] Largest planet in solar system?",
        "options": ["a) Earth", "b) Mars", "c) Jupiter", "d) Saturn"],
        "answer": "c"
    },
    {
        "ques": "9] A shopkeeper buys an item for ₹500 and sells it at 20% profit. What is the selling price?",
        "options": ["a) ₹550", "b) ₹600", "c) ₹650", "d) ₹700"],
        "answer": "b"
    },
    {
        "ques": "10] A person walks 3 km east, then 4 km north. What is the shortest distance from the starting point?",
        "options": ["a) 5 km", "b) 16 km", "c) 9 km", "d) 10 km"],
        "answer": "a"
    }
]

score = 0

print("\n ------JEE-Style Quiz (+4 : Correct, -1 : Incorrect, 0 : Unattempted)------\n")

for q in questions:
    print(q["ques"])
    for opt in q["options"]:
        print(opt)
    
    user_ans = input("Enter your choice (a/b/c/d) or press 'Enter' to skip : ").lower()
    
    if user_ans == "":
        print("Skipped (0)\n")
    elif user_ans == q["answer"]:
        score += 4
        print("Correct (+4)\n")
    else:
        score -= 1
        print("Incorrect (-1)\n")

print(" Quiz Over !!!!\n")
if score >=35:
    print(" Excellent Work !!!!")
    print(" Your Total Score = ", score)
elif score >=25 and score <35:        
    print(" Good Work !!!!")
    print(" Your Total Score = ", score)        
elif score >=15 and score <25:
    print(" Average Work !!!!")
    print(" Your Total Score = ", score)        
elif score >=0 and score <15:
    print(" Dont Worry, Better Luch Next Time  !!!!")
    print(" Your Total Score = ", score)    
else:
    print(" Poor Work !!!!")
    print(" Your Total Score = ", score)