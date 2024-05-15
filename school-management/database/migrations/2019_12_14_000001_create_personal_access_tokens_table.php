<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tokenable_id');
            $table->string('tokenable_type', 191);
            $table->string('name');
            $table->text('token');
            $table->text('abilities');
            $table->timestamp('created_at')->nullable();

            $table->index(['tokenable_type', 'tokenable_id']); // Spécifiez la longueur personnalisée ici
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
