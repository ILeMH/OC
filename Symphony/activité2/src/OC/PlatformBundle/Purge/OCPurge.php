<?php

// OC/PlatformBundle/Purge/OCPurge.php

namespace OC\PlatformBundle\Purge;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use OC\PlatformBundle\Entity\Advert;

class OCPurge
{
	private $em;

	public function __construct(\Doctrine\ORM\EntityManager $em)
	{
		$this->em = $em;
	}

	public function purge($day)
	{
	    $listAdverts = $this->em
        ->getRepository('OCPlatformBundle:Advert')
        ->createQueryBuilder('a')
        ->where('a.nbApplications = 0')
        ->andWhere('DATE_DIFF(CURRENT_DATE(), a.date) > :day')
        ->setParameter('day', $day)
        ->getQuery()->getResult();


    return $listAdverts;

	}
}