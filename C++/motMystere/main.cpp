#include <iostream>
#include <string>
#include <ctime>
#include <cstdlib>
#include <fstream>
#include <algorithm>

using namespace std;

string melangerLettres(string mot)
{
   string melange;
   int position(0);

   while (mot.size() != 0)
   {
      position = rand() % mot.size();

      melange += mot[position];

        mot.erase(position, 1);
    }

   return melange;
}

void leMot()
{

       string motMystere, motMelange, motUtilisateur;

       int tentative(0);
       int totalTest(0);

       cout << "Combien de tentative pour ce jeu ?" << endl;
       cin >> totalTest;
       srand(time(NULL));
       ifstream flux("dico.txt");
       if(flux)
       {
           flux.seekg(0, ios::end);
           int taille = flux.tellg();
           flux.seekg(rand()%taille+1, ios::beg);
           getline(flux, motMystere);
           motMelange = melangerLettres(motMystere);
           cout << "Aide : le mot est : " << motMystere << endl;

           while (motUtilisateur != motMystere && tentative <= totalTest)
           {
               tentative++;
              cout << endl << "Quel est ce mot ? " << motMelange << endl;
              cin >> motUtilisateur;
              transform(motUtilisateur.begin(), motUtilisateur.end(), motUtilisateur.begin(),::toupper);

              if (motUtilisateur == motMystere)
              {
                 cout << "Bravo !" << endl << "Vous avez reussi en " << tentative << " coups !" << endl;
              }
              else
              {
                 cout << "Ce n'est pas le mot !" << endl;
              }
            }
       }
}

int main()
{
    string jouer("o");
    while(jouer == "o")
    {
        leMot();
        cout << "Voulez-vous jouer encore ? o/n" << endl;
        cin >> jouer;
        while(jouer != "o" && jouer != "n")
        {
            cout << "veuillez entrer \"o\" ou \"n\"" << endl;
            cin >> jouer;
        }
    }
    cout << "Au revoir et a bientot :\)";
}
