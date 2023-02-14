

"""
# All statistics taken from and property of Basketball-Reference.com
# Link: https://www.basketball-reference.com/
#
# Author: David Luby
# Date created: 2/10/2023
#
# This script uses a function to loosely evaluate an NBA player's
# contract value. The function receives a player's name as an input and
# outputs their evaluation, contract, age, ppg, apg, and rpg.
"""


from bs4 import BeautifulSoup
import requests


"""
# this function takes a players full name separated by a space and
# returns the corresponding basketball reference url
"""
def create_URL(full_name):

    first, last = full_name.lower().split()

    first_of_last = last[0]
    first_five_last = last[0:5]
    first_two_first = first[0:2]


    flag = False
    count = 0
    while count < 1:#flag == False:
        count += 1
        number = str(count)
        url = ('https://www.basketball-reference.com/players/' + first_of_last
                + '/' + first_five_last + first_two_first + '0' + number
                + '.html')


        page = requests.get(url)
        soup = BeautifulSoup(page.text, 'html.parser')
        name = soup.h1.span
        page_first, page_last = name.get_text().split()
        

        if first == page_first.lower():
            flag = True
    print(first, page_first.lower())
    out = [first, page_first.lower()]
    return out





def main():
    out = create_URL('marcus smart')
    return out



if __name__ == '__main__':
    # duplicate at jonesda01-jonesda05
    main()

