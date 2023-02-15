

"""
# All statistics taken from and property of Basketball-Reference.com
# Link: https://www.basketball-reference.com/
#
# Author: David Luby
# Date created: 2/10/2023
#
# This script is under construction
"""

# Package imports
from bs4 import BeautifulSoup
import requests



"""
# This function takes a players full name and returns the corresponding
# URL from Basketball-Reference.com
"""
def find_player(full_name):
    data = []


    # Handle input for URL assembly
    first, last = full_name.lower().split()
    first_of_last = last[0]

    if len(last) >= 5:
        first_five_last = last[0:5]
    else:
        first_five_last = last
    
    first_two_first = first[0:2]



    # Iterate similar URL's until matched
    count = 0
    flag = False
    while (count <= 3) and (flag == False):
        count += 1
        page_number = str(count)


        # Assemble page URL
        url = ('https://www.basketball-reference.com/players/' + first_of_last
                + '/' + first_five_last + first_two_first + '0' + page_number
                + '.html')



        # Create page soup, verify page exists, check match condition
        page = requests.get(url)
        soup = BeautifulSoup(page.text, 'html.parser')
        check_page = soup.h1

        if check_page.get_text() == "Page Not Found (404 error)":
            data.append("Try again. No player was found.")
            break

        else:
            # Exit loop on matching first name
            page_name = check_page.span.get_text()
            page_first, page_last = page_name.split()

            if first == page_first.lower():
                flag = True
                data.append(page_name)


    return(flag, data, soup)



"""
# This function takes a player page soup and returns the corresponding
# player's statistics from Basketball-Reference.com
"""
def get_data(flag, data, soup):

    if flag == False:
        pass

    else:
        # Initialize list of ID tags to parse soup
        id_names = ["meta", "age", "team_id", "pos", "mp_per_g", "fg_pct", "fg3_pct",
                "trb_per_g", "ast_per_g", "stl_per_g", "blk_per_g",
                "tov_per_g", "pts_per_g"]
    
        count = 0
        for id in id_names:
            count += 1
            if count == 1:
                picture = soup.find("div", {"class","media-item"})
                data.append(picture.find("img")["src"])
            else:
                current_season = soup.find("tr", {"id":"per_game.2023"})
                data.append(current_season.find("td", {"data-stat":id}).get_text())

    return data




def main(name):
    flag, name, soup = find_player(name)
    stats = get_data(flag, name, soup)

    return stats


if __name__ == '__main__':
    # duplicate at jonesda01-jonesda05
    # short names k love, b bass, b roy
    main()

