'''
Given a clock time in format (hh:mm),
determine to the nearest degree the angle
between the hour and minute hands
'''

def timeToDegree(time):
    if time == None or any(c.isalpha() for c in time) or len(time) > 5: return

    if not(any(c == ':' for c in time)): return "timeToDegree not formated (hh:mm)"

    hour, minu = time.split(":")

    hourAngle = int(hour) * 30
    minAngle = int(minu) * 6

    if hourAngle == 360: hourAngle = 0
    if minAngle == 360: minAngle = 0

    return(max(hourAngle, minAngle) - min(hourAngle, minAngle))

print(timeToDegree("12:16"))
