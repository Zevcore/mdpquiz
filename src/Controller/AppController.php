<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AppController extends AbstractController
{
    #[Route("/", name: "app_index")]
    public function index(): Response
    {
        return $this->render("app/index.html.twig");
    }

    #[Route("/game", name: "app_game")]
    public function game(): Response
    {
        return $this->render("game/index.html.twig");
    }

    #[Route("/invite", name: "app_invite")]
    public function invite(): Response
    {
        return $this->render("app/invite.html.twig");
    }
}