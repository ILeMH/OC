#include "Personnages.h"
#include <string>

using namespace std;

    Personages::Personnages()
    {
        m_vie = 100;
        m_mana = 100;
        m_nomArme = "Épée rouillée";
        m_degatsArme = 10;
    }
    Personnages::~Personnages(){}
    void Personnages::recevoirDegats(int nbDegats)
    {
        m_vie -= nbDegats;

        if (m_vie < 0)
        {
            m_vie = 0;
        }
    }

    void Personnages::attaquer(Personnages &cible)
    {
        cible.recevoirDegats(m_arme.getDegats());
    }

    void Personnages::boirePotionDeVie(int quantitePotion)
    {
        m_vie += quantitePotion;

        if (m_vie > 100)
        {
            m_vie = 100;
        }
    }

    void Personnage::changerArme(string nomNouvelleArme, int degatsNouvelleArme)
    {
        m_arme.changer(nomNouvelleArme, degatsNouvelleArme);
    }

    bool Personnages::estVivant() const
    {
        if (m_vie > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    void Personnage::afficherEtat() const
    {
        cout << "Vie : " << m_vie << endl;
        cout << "Mana : " << m_mana << endl;
        m_arme.afficher();
    }


    int m_vie;
    int m_mana;
    string m_nomArme;
    int m_degatsArme;

