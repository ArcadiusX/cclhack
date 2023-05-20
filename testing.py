import random

level=0
tally = 0

def getNewQuestion(level):
    global tally
    if level == 0:
        n1=random.randint(0, 10)
        n2=random.randint(0, 10)
        answer=n1+n2
        question=f"{n1}+{n2}"

    if level == 1:
        n1=random.randint(0, 10)
        n2=random.randint(0, n1)
        answer=n1-n2
        question=f"{n1}-{n2}"

    if level == 2:
        n1=random.randint(10, 100)
        n2=random.randint(10, 100)
        answer=n1+n2
        question=f"{n1}+{n2}"

    if level == 3:
        n1=random.randint(10, 100)
        n2=random.randint(10, n1)
        answer=n1-n2
        question=f"{n1}-{n2}"
    
    if level==4:
        n1=random.randint(0, 12)
        n2=random.randint(0, 12)
        answer=n1*n2
        question=f"{n1}x{n2}"
    
    if level==5:
        n1=random.randint(10, 100)
        n2=random.randint(10, 100)
        answer=n1*n2
        question=f"{n1}x{n2}"
    try: 
        user=int(input(question+"\n"))
    except: 
        print("Not a number")
    else: 
        if user == answer:
            print("correct")
            if tally <25:
                tally += 1
        else:
            print(f"incorrect, the correct answer was {answer}")

            tally -= 1

def calcLevel(tly, lvl):
    if tly <= 3:
        return 0
    elif tly >= 24:
        return 5
    else:
        return tly//4

while True:
    getNewQuestion(level)
    level = calcLevel(tally, level)